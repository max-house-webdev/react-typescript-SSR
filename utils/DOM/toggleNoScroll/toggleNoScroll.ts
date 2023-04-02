import styles from './noScroll.scss';

export function toggleNoScroll(overlaySelector?: string) {
  if (overlaySelector) {
    const overlayElement = document.querySelector(overlaySelector);
    if (overlayElement) {
      overlayElement.classList.toggle(styles.overlay);
    }
  }

  document.documentElement.classList.toggle(styles['no-scroll']);
  document.body.classList.toggle(styles['no-scroll']);
}

export function removeNoScroll(overlaySelector?: string) {
  if (overlaySelector) {
    const overlayElement = document.querySelector(overlaySelector);
    if (overlayElement) {
      overlayElement.classList.remove(styles.overlay);
    }
  }

  document.documentElement.classList.remove(styles['no-scroll']);
  document.body.classList.remove(styles['no-scroll']);
}

export function addNoScroll(overlaySelector?: string) {
  if (overlaySelector) {
    const overlayElement = document.querySelector(overlaySelector);
    if (overlayElement) {
      overlayElement.classList.add(styles.overlay);
    }
  }

  document.documentElement.classList.add(styles['no-scroll']);
  document.body.classList.add(styles['no-scroll']);
}
