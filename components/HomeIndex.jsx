import React, { useState, useEffect, useRef, useCallback } from "react";

import callService from "../contexts/function/callService";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_LOADING } from "../redux/types";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import CreateTeamModal from "./CreateTeamModal";

export default function HomeIndex(props) {
  const [createOpenModal, setCreateOpenModal] = useState(false);

  const [players, setPlayers] = useState(props.data);
  const teams = useSelector((state) => state.team.teams);

  const loading = useSelector((state) => state.loading);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const [page, setPage] = useState(1);
  const loader = useRef(null);
  const dispatch = useDispatch();
  const observer = useRef();
  const [username, setUsername] = useState("");

  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setUsername(Cookies.get("username"));
  }, []);

  useEffect(() => {
    (async () => {
      if (page > 1) {
        dispatch({ type: UPDATE_LOADING, loading: true });

        const response = await callService(
          "GET",
          `https://www.balldontlie.io/api/v1/players?per_page=10&page=${page}`,
          {},
          {}
        );

        if (response.status === 200) {
          setPlayers([...players, ...response.data.data]);
          setHasMore(
            response.data.meta.total_pages !== response.data.meta.current_page
          );
        }

        dispatch({ type: UPDATE_LOADING, loading: false });
      }
    })();
  }, [page]);

  function handleLogout() {
    Cookies.remove("username");
    router.push("/authen/login");
  }

  return (
    <>
      <div>
        <div className="flex justify-between">
          <h6>
            Welcome, <span className="text-main-primary">{username}</span>{" "}
          </h6>
          <button
            className="primary-outline-button text-main-secondary font-normal"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        {teams.length > 0 && (
          <div className="mt-2">
            <h3>Teams</h3>
            <div className="my-8 grid gap-4 grid-cols-3">
              {teams.map((t) => {
                return (
                  <div
                    className="bg-main-gradient-left px-6 py-4 rounded-md "
                    key={t.name}
                  >
                    <div className="text-white flex flex-col">
                      <span className="p2 text-white">
                        <b>Team Name:</b> {t.name}
                      </span>
                      <span className="p2 text-white mt-1">
                        <b>player Count:</b> {t.playercount}
                      </span>
                      <span className="p2 text-white mt-1">
                        <b>Region:</b> {t.region}
                      </span>
                      <span className="p2 text-white mt-1">
                        <b>Country:</b> {t.country}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className=" mt-2">
          <h3>Players</h3>
        </div>
        <div className="mt-8">
          <button
            className="primary-gradient-button py-2 px-4 text-sm mr-8"
            onClick={() => setCreateOpenModal(true)}
          >
            Create Team
          </button>
          <button className="primary-gradient-button py-2 px-4 text-sm mr-8">
            Update Team
          </button>
          <button className="primary-gradient-button py-2 px-4 text-sm">
            Remove Team
          </button>
        </div>
        <div className="mt-16">
          {players.map((player, i) => {
            return (
              <div
                key={player.id}
                ref={players.length === i + 1 ? lastBookElementRef : null}
                className="w-full bg-white rounded-md px-8 py-4 shadow-md mb-4"
              >
                <span className="p2 block mb-1">{i + 1}. </span>
                <span className="p2">
                  <span className="text-main-primary font-bold ">Name:</span>{" "}
                  {player.first_name} {player.last_name}
                </span>

                <span className="p2 block mt-2 ">
                  <span className="text-main-primary font-bold">
                    Team Name:
                  </span>{" "}
                  {player.team.full_name}
                </span>
              </div>
            );
          })}
        </div>
        <div ref={loader} />
        {loading && (
          <div className="flex justify-center items-center my-8">
            <div
              class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-t-[#e5e5e5] border-b-[#e5e5e5] border-l-[#e5e5e5] border-r-main-primary align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        )}
        {!loading && (
          <span
            style={{
              height: "75px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            This is the end{" "}
          </span>
        )}
      </div>
      <CreateTeamModal
        openModal={createOpenModal}
        setOpenModal={setCreateOpenModal}
      />
    </>
  );
}
