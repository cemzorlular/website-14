import { AnimateOnScroll } from '@/components/animation/AnimateOnScroll';
import { Button } from '@/components/ui/Button';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <div className={styles.wrapper}>
      <AnimateOnScroll>
        <div className={styles.label}>Get in Touch</div>
        <h2 className={styles.heading}>
          Ready to navigate
          <br />
          <em className={styles.italic}>complex terrain?</em>
        </h2>
        <p className={styles.description}>
          Whether you are exploring a Nordic-CEE launch, evaluating market access pathways, or seeking a commercial partner with embedded infrastructure — we should talk.
        </p>
        <div className={styles.ctas}>
          <Button variant="primary" href="mailto:contact@erkim.com">
            Start a conversation
          </Button>
          <Button variant="ghost" href="#markets">
            View our market coverage
          </Button>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
