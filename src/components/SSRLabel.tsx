import { createResource, createSignal, Match, Switch } from "solid-js";

function fetchServerResource(): Promise<string> {
  "use server";
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from the server!");
    }, 1000);
  });
}

export default function SSRLabel() {
  const [data] = createResource<string>(fetchServerResource);
  return (
    <Switch>
      <Match when={data.loading}>Loading...</Match>
      <Match when={data.error}>Error: {data.error}</Match>
      <Match when={data()}>{data()}</Match>
    </Switch>
  );
}
