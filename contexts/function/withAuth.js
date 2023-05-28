export function requireAuthentication(gssp) {
  return async (context) => {
    const { req } = context;

    const username = req.cookies.username;

    if (!username) {
      return {
        redirect: {
          destination: "/authen/login",
          statusCode: 302,
        },
      };
    }

    return await gssp(context);
  };
}
