import fetchJson from "../../services/fetchJson";
import withSession from "../../services/session";

export default withSession(async (req, res) => {
  //   const { username } = await req.body;
  //   const url = `https://api.github.com/users/${username}`;

  //   try {
  //     // we check that the user exists on GitHub and store some data in session
  //     const { login, avatar_url: avatarUrl } = await fetchJson(url);
  //     const user = { isLoggedIn: true, login, avatarUrl };
  //     req.session.set("user", user);
  //     await req.session.save();
  //     res.json(user);
  //   } catch (error) {
  //     const { response: fetchResponse } = error;
  //     res.status(fetchResponse?.status || 500).json(error.data);
  //   }

  const { email } = await req.body;
  const nome = "Thiago Moreira Ribeiro";
  console.log("email passado: ", email)

  if(email === "user@user.com"){
    const user = { isLoggedIn: true, nome };

    req.session.set("user", user);
    await req.session.save();
    res.json(user);
  }else{
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 404).json(error.data);

  }
  // try {
  //   email === "thiagom.r@hotmail.com";
  //   const user = { isLoggedIn: true, nome };
  //   req.session.set("user", user);
  //   await req.session.save();
  //   res.json(user);
  // } catch (error) {
  //   const { response: fetchResponse } = error;
  //   res.status(fetchResponse?.status || 500).json(error.data);
  // }
});
