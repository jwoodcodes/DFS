import PostWeekOne2023 from '@/components/articles/PostWeekOne2023';
import styles from '@/styles/articles.module.css';

export default function Articles() {
  return (
    <div>
      <h1 className={styles.mainArticlePageMainHeading}>
        Articles/Fantasy Musings
      </h1>
      <PostWeekOne2023 />
    </div>
  );
}
