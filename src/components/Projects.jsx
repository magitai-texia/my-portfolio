import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>

        <div className="project">
        <h3>Wardrobe-App</h3>
        <p>衣服の管理を手助けするアプリです。ReactとlocalStorageを利用して、クローゼットの整理やアイテムの追加・削除が簡単に行えます。</p>
        <a href="https://github.com/magitai-texia/wardrobe-app" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <div className="project">
        <h3>Muscle-App</h3>
        <p>AI活用型筋トレ記録アプリケーション開発です。</p>
        <a href="https://github.com/magitai-texia/muscle-app" target="_blank" rel="noopener noreferrer">GitHub</a>
</div>
      </div>
    </section>
  );
};

export default Projects;
