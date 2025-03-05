import { css } from "lit";

export const Styles = css`
  :host {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.2rem;
    color: #ffffff;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #1e1e2e, #3a3a5e);
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  main {
    flex-grow: 1;
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    background: linear-gradient(to right, #ff6a00, #ee0979);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .content {
    width: 90%;
    max-width: 800px;
    background: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease-in-out;
  }

  .content:hover {
    transform: scale(1.03);
  }

  .app-footer {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  .app-footer a {
    margin-left: 5px;
    color: #ff6a00;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  .app-footer a:hover {
    color: #ee0979;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    :host {
      font-size: 1rem;
      padding: 1rem;
    }
    .content {
      width: 100%;
      padding: 1rem;
    }
  }
`;
