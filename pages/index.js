import Header from "../components/Header";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/2d484181a3.js"
          crossorigin="anonymous"
        ></script>
        <title>Portfolio</title>
      </Head>
      <Header />
    </>
  );
};

export default index;
