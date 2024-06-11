import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Такой страницы нет! 404</h1>
      <p>Вы ошиблись в ссылке, проверьте е еще раз.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}