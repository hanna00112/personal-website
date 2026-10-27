const posts = [];

export default function Blog() {
  return (
    <>
      <h1 className="display page-title">Blog</h1>
      {posts.length === 0 ? (
        <p className="empty">Posts you add in this file will show up here.</p>
      ) : (
        <div className="posts">
          {posts.map((post) => (
            <article className="post" key={`${post.title}-${post.date}`}>
              <h2>{post.title}</h2>
              {post.date ? <time>{post.date}</time> : null}
              {post.body ? <p>{post.body}</p> : null}
            </article>
          ))}
        </div>
      )}
    </>
  );
}
