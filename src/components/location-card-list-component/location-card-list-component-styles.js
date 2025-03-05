import { css } from "lit";

export const Styles = css`
  :host {
    --grid-gap: 24px;
    --grid-background: linear-gradient(135deg, #1a1a2e, #16213e);
    --grid-item-bg: rgba(255, 255, 255, 0.1);
    --title-color: #ffcc00;
    --grid-border-radius: 16px;
    --grid-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    --grid-hover-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    --text-color: #fff;
  }

  h1 {
    color: var(--title-color);
    font-size: 2.5rem;
    text-align: center;
    padding: 24px 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    position: relative;
    text-shadow: 0px 0px 12px rgba(255, 204, 0, 0.6);
    animation: titleGlow 1s ease-in-out;
  }

  h1::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, transparent, var(--title-color), transparent);
    border-radius: 2px;
  }

  @keyframes titleGlow {
    0% { opacity: 0; transform: translateY(-10px); text-shadow: none; }
    100% { opacity: 1; transform: translateY(0); text-shadow: 0px 0px 12px rgba(255, 204, 0, 0.6); }
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--grid-gap);
    padding: 24px;
    background: var(--grid-background);
    border-radius: var(--grid-border-radius);
    box-shadow: var(--grid-shadow);
    animation: gridFadeIn 0.8s ease-in-out;
    transition: all 0.3s ease;
  }

  .grid-container:hover {
    box-shadow: var(--grid-hover-shadow);
  }

  @keyframes gridFadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .grid-item {
    background: var(--grid-item-bg);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    color: var(--text-color);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .grid-item:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(255, 255, 255, 0.15);
  }

  @media (min-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(4, 1fr);
      padding: 28px;
      max-width: 1400px;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
      padding: 16px;
    }

    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .grid-container {
      grid-template-columns: 1fr;
      gap: 14px;
      padding: 12px;
    }

    h1 {
      font-size: 1.8rem;
    }
  }
`;
