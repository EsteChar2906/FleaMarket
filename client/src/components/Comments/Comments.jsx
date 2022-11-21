import React from "react";

export default function Comment(){

  const Discus = () => {
    var d = document, s = d.createElement('script');
    s.src = 'https://fleamarket-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }

  return(
    <div>
      <div id="disqus_thread"></div>
      <script>
        {
          Discus()
        }
      </script>
      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>
  )
}