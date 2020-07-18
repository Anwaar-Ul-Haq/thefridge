import Head from "next/head";
import ListItems from "../containers/ListItems";
import NewItemForm from "../containers/NewItemForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fridge social network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Fridge social network</h1>
        <h2>Add something to fridge</h2>
        <NewItemForm />
        <h2>Items in fridge</h2>
        <ListItems />
      </main>
    </div>
  );
}
