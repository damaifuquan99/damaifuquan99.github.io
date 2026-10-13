// 当前示例脚本只是占位：可扩展为点击卡片弹出详细 posts
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.friend-card').forEach(card=>{
    card.addEventListener('click', (e)=>{
      // 防止点击内部链接触发两次
      if(e.target.tagName.toLowerCase() === 'a') return;
      // 简单跳转到友链主页（你也可以弹窗显示 .friend-latest 内容）
      const link = card.querySelector('.friend-link');
      if(link) window.open(link.href, '_blank');
    });
  });
});
