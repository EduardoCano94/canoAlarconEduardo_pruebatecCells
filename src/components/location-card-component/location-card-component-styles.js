import { css } from "lit";

export const Styles = css`
  :host {
    --card-background: #ffffff;
    --card-shadow: rgba(0, 0, 0, 0.15);
    --hover-shadow: rgba(36, 170, 145, 0.5);
    --text-primary: #1a2b3c;
    --text-secondary: #4a5568;
    --border-radius: 14px;
    --gradient-primary: linear-gradient(135deg, #78c800 0%, #00e0be 100%);
    --gradient-background: linear-gradient(135deg, var(--card-background) 0%, #f2f5f8 100%);
  }

  .card {
    background: var(--gradient-background);
    border-radius: var(--border-radius);
    box-shadow: 
      0 6px 16px var(--card-shadow),
      0 2px 6px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    max-width: 340px;
    margin: 20px auto;
    transition: 
      transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
      box-shadow 0.3s ease,
      background 0.3s ease;
    display: flex;
    flex-direction: column;
    position: relative;
    perspective: 1000px;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .card:hover {
    transform: translateY(-10px) rotateX(3deg) scale(1.02);
    box-shadow: 
      0 14px 40px var(--hover-shadow),
      0 6px 18px rgba(36, 170, 145, 0.25);
    background: var(--gradient-primary);
  }

  .card:hover::before {
    opacity: 1;
  }

  .card__title {
    font-size: 1.7rem;
    margin: 18px;
    color: var(--text-primary);
    text-align: center;
    font-weight: 700;
    letter-spacing: -0.5px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08);
    background: linear-gradient(45deg, #2c3e50, #2980b9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .location-info {
    padding: 18px;
    color: var(--text-secondary);
    background: rgba(255, 255, 255, 0.95);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    transition: background 0.3s ease;
  }

  .card:hover .location-info {
    background: rgba(255, 255, 255, 0.85);
  }

  .location-type,
  .location-dimension {
    margin: 10px 0;
    font-size: 1.2rem;
    line-height: 1.5;
    transition: 
      color 0.3s ease,
      transform 0.2s ease;
  }

  .location-type,
  .location-dimension {
    color: rgb(6, 115, 98);
    position: relative;
    padding-left: 22px;
  }

  .location-type::before,
  .location-dimension::before {
    content: '•';
    position: absolute;
    left: 0;
    color: rgba(6, 115, 98, 0.75);
    font-size: 1.5rem;
    line-height: 1;
  }

  .card:hover .location-type,
  .card:hover .location-dimension {
    transform: translateX(6px);
    color: rgba(6, 115, 98, 1);
  }

  .resident-count {
    font-weight: 600;
    color: rgb(15, 75, 65);
    font-size: 1.2rem;
    margin-top: 8px;
    text-align: right;
    position: relative;
    padding-right: 22px;
  }

  .resident-count::after {
    content: '👥';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
