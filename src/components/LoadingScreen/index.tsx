import loadingStyles from './loadingScreen.module.scss';

function LoadingScreen(): JSX.Element {
  return (
    <div className={loadingStyles.container}>
      <div className={loadingStyles.spinner}>
        <h2 className={loadingStyles.texto}>Carregando...</h2>
        <div className={loadingStyles.rect1} />
        <div className={loadingStyles.rect2} />
        <div className={loadingStyles.rect3} />
        <div className={loadingStyles.rect4} />
        <div className={loadingStyles.rect5} />
      </div>
    </div>
  );
}

export default LoadingScreen;
