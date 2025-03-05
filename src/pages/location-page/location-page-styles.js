import { css } from "lit";

export const Styles = css`
  :host {
    --page-background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    --title-color: #ffcc00;
    --title-accent-color: #ff3366;
    --text-color: #fff;
    --content-padding: 4%;
    --logo-border-radius: 16px;
  }

  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--content-padding);
    background: var(--page-background);
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    animation: fadeIn 1s ease-in-out;
  }

  div::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 80%);
    animation: floatingGlow 6s infinite alternate;
    z-index: 1;
  }

  @keyframes floatingGlow {
    from {
      transform: scale(0.95);
      opacity: 0.6;
    }
    to {
      transform: scale(1.05);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    font-size: 3.5rem;
    margin: 20px 0;
    color: var(--title-color);
    font-weight: 900;
    text-shadow: 4px 4px 10px rgba(255, 255, 255, 0.2);
    letter-spacing: -1px;
    position: relative;
    z-index: 2;
  }

  h1 span {
    color: var(--title-accent-color);
    transition: color 0.3s ease, text-shadow 0.3s ease;
  }

  h1:hover span {
    color: #ff6699;
    text-shadow: 0px 0px 8px rgba(255, 51, 102, 0.7);
  }

  .logo {
    max-width: 500px;
    width: 85%;
    margin: 20px 0;
    border-radius: var(--logo-border-radius); 
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.15);
    animation: logoAppear 1s ease-in-out;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    z-index: 2;
  }

  .logo:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(255, 255, 255, 0.2);
  }

  @keyframes logoAppear {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .content {
    padding: 2%;
    position: relative;
    z-index: 2;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    transition: transform 0.3s ease-in-out;
  }

  .content:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.8rem;
    }

    .logo {
      max-width: 90%;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2.2rem;
    }
  }
`;
