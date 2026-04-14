// 复制功能
const copyButtons = document.querySelectorAll('.copy-btn');
const copyToast = document.getElementById('copy-toast');

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetText = button.getAttribute('data-target');
    
    // 复制到剪贴板
    navigator.clipboard.writeText(targetText).then(() => {
      // 显示提示
      copyToast.classList.add('copy-toast');
      
      // 重置动画
      setTimeout(() => {
        copyToast.classList.remove('copy-toast');
      }, 2000);
    });
  });
});

// 分类筛选功能
const categoryButtons = document.querySelectorAll('.category-btn');
const resourceCards = document.querySelectorAll('.resource-card');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 更新按钮样式
    categoryButtons.forEach(btn => {
      btn.classList.remove('active', 'bg-primary/70', 'hover:bg-primary/90', 'text-white', 'shadow-md');
      btn.classList.add('bg-white/70', 'hover:bg-gray-50/90', 'text-gray-700', 'shadow-sm');
    });
    
    button.classList.add('active', 'bg-primary/70', 'hover:bg-primary/90', 'text-white', 'shadow-md');  
    button.classList.remove('bg-white/70', 'hover:bg-gray-50/90', 'text-gray-700', 'shadow-sm');  
    
    // 筛选资源
    const category = button.getAttribute('data-category');
    
    resourceCards.forEach(card => {
      if (!category || card.getAttribute('data-categories').includes(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// --- 修复和优化的代码开始 ---

// 统一关闭模态框的函数
function closeAllModals() {
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
        modal.classList.add('hidden');
    });
}

// 为所有关闭按钮添加事件监听
document.querySelectorAll('.close-modal-btn').forEach(button => {
    button.addEventListener('click', closeAllModals);
});

// 搜索和彩蛋功能
const searchInputs = document.querySelectorAll('input[placeholder*="搜索资源名称"]');
const 彩蛋提示弹窗 = document.getElementById('彩蛋提示弹窗');
const 取消打开按钮 = document.getElementById('取消打开');
const 确认打开按钮 = document.getElementById('确认打开');

// 关闭彩蛋弹窗
function 关闭彩蛋弹窗() {
  彩蛋提示弹窗.classList.add('hidden');
}

// 取消打开链接
取消打开按钮.addEventListener('click', () => {
  searchInputs.forEach(input => {
    input.value = ''; // 清空所有搜索框
  });
  关闭彩蛋弹窗();
});

// 为每个搜索框添加输入事件监听
searchInputs.forEach(input => {
  input.addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim();
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    // 彩蛋1：输入"0721"显示提示弹窗
    if (lowerSearchTerm === '0721') {
      setTimeout(() => {
        彩蛋提示弹窗.classList.remove('hidden');
        // 动态绑定0721对应的链接
        确认打开按钮.onclick = function() {
          window.open('https://nn0721.icu', '_blank');
          searchInputs.forEach(input => { input.value = ''; });
          关闭彩蛋弹窗();
        };
      }, 100);
    }
    // --- 新增开始 ---
    // 彩蛋3：输入"SYZX"或"神隐之乡"显示提示弹窗
    else if (lowerSearchTerm === 'syzx' || searchTerm === '神隐之乡') {
      setTimeout(() => {
        彩蛋提示弹窗.classList.remove('hidden');
        // 动态绑定新彩蛋对应的链接
        确认打开按钮.onclick = function() {
          window.open('https://acgsyzx.me/', '_blank');
          searchInputs.forEach(input => { input.value = ''; });
          关闭彩蛋弹窗();
        };
      }, 100);
    }
    //彩蛋4：输入"qingju"或"青桔"显示提示弹窗
    else if (lowerSearchTerm === 'qingju' || searchTerm === '青桔') {
      setTimeout(() => {
        彩蛋提示弹窗.classList.remove('hidden');
        // 动态绑定新彩蛋对应的链接
        确认打开按钮.onclick = function() {
          window.open('https://qingju.org/', '_blank');
          searchInputs.forEach(input => { input.value = ''; });
          关闭彩蛋弹窗();
        };
      }, 100);
    }
    
    // 彩蛋2：输入"Ciallo"自动打开B站ciallo歌
    if (lowerSearchTerm === 'ciallo') {
      setTimeout(() => {
        window.open('https://www.bilibili.com/video/BV1sK41137i5/?share_source=copy_web&vd_source=ac3caf1a4647dbd011e3ceca2706b20c&t=12', '_blank');
        e.target.value = ''; // 只清空当前正在输入的搜索框
      }, 300);
    }
    
    // 常规搜索逻辑
    resourceCards.forEach(card => {
      const cardTitle = card.querySelector('h3').textContent.toLowerCase();
      
      if (cardTitle.includes(lowerSearchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  
  if (window.scrollY > 50) {
    header.classList.add('shadow-md');
    header.classList.remove('shadow-sm');
  } else {
    header.classList.remove('shadow-md');
    header.classList.add('shadow-sm');
  }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // 关闭移动菜单（如果打开的话）
      if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
      }
      
      window.scrollTo({
        top: targetElement.offsetTop - 80, // 减去导航栏高度
        behavior: 'smooth'
      });
    }
  });
});

// 收藏功能
const favoriteButtons = document.querySelectorAll('.favorite-btn');
const favoriteToast = document.getElementById('favorite-toast');
const unfavoriteToast = document.getElementById('unfavorite-toast');
const favoriteGrid = document.querySelector('.favorite-grid');

// 从本地存储加载收藏
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// 更新收藏按钮状态
function updateFavoriteButtons() {
  favoriteButtons.forEach(button => {
    const resourceId = button.getAttribute('data-id');
    if (favorites.includes(resourceId)) {
      button.classList.add('active');
      button.innerHTML = '<i class="fa-solid fa-star"></i>';
    } else {
      button.classList.remove('active');
      button.innerHTML = '<i class="fa-regular fa-star"></i>';
    }
  });
  renderFavorites();
}

// 渲染收藏列表
function renderFavorites() {
  if (favorites.length === 0) {
    favoriteGrid.innerHTML = `
      <div class="col-span-full text-center py-12 text-gray-500">
        <i class="fa-regular fa-star text-4xl mb-4 opacity-30"></i>
        <p>您还没有收藏任何资源，点击资源卡片上的星星图标进行收藏</p>
      </div>
    `;
    return;
  }
  
  favoriteGrid.innerHTML = '';
  resourceCards.forEach(card => {
    const resourceId = card.getAttribute('data-id');
    if (favorites.includes(resourceId)) {
      const clone = card.cloneNode(true);
      // 更新克隆卡片中的收藏按钮事件
      const cloneBtn = clone.querySelector('.favorite-btn');
      cloneBtn.addEventListener('click', handleFavoriteClick);
      favoriteGrid.appendChild(clone);
    }
  });
}

// 收藏按钮点击事件处理
function handleFavoriteClick(e) {
  const button = e.currentTarget;
  const resourceId = button.getAttribute('data-id');
  
  if (favorites.includes(resourceId)) {
    // 取消收藏
    favorites = favorites.filter(id => id !== resourceId);
    unfavoriteToast.classList.add('copy-toast');
    setTimeout(() => {
      unfavoriteToast.classList.remove('copy-toast');
    }, 2000);
  } else {
    // 添加收藏
    favorites.push(resourceId);
    favoriteToast.classList.add('copy-toast');
    setTimeout(() => {
      favoriteToast.classList.remove('copy-toast');
    }, 2000);
  }
  
  // 保存到本地存储并更新UI
  localStorage.setItem('favorites', JSON.stringify(favorites));
  updateFavoriteButtons();
}

// 为所有收藏按钮添加点击事件
favoriteButtons.forEach(button => {
  button.addEventListener('click', handleFavoriteClick);
});

// 加载更多按钮功能
const loadMoreBtn = document.getElementById('load-more');
let isLoading = false;
let hasMore = true; // 模拟是否有更多数据

loadMoreBtn.addEventListener('click', () => {
  if (isLoading || !hasMore) return;
  
  isLoading = true;
  loadMoreBtn.innerHTML = '<span>加载中...是不可能，你被骗了（doge）</span><i class="fa fa-spinner fa-spin"></i>';
  loadMoreBtn.classList.add('loading');
  
  // 模拟加载延迟
  setTimeout(() => {
    if (Math.random() > 0.5) { // 模拟有时加载失败或没有更多数据
      hasMore = false;
      loadMoreBtn.innerHTML = '<span>哪有那么多资源给你啊！再给过不了审啦！</span>';
      loadMoreBtn.classList.add('no-more');
    } else {
      // 这里是模拟加载更多，如果有真实的API，可以在这里发起请求
      loadMoreBtn.innerHTML = '<span>加载更多资源</span><i class="fa fa-refresh"></i>';
    }
    
    isLoading = false;
    loadMoreBtn.classList.remove('loading');
  }, 1500);
});

// 分享按钮功能
const shareBtn = document.querySelector('.share-btn');
const shareModal = document.getElementById('share-modal');

shareBtn.addEventListener('click', () => {
  shareModal.classList.remove('hidden'); // 显示分享弹窗
  // 3秒后自动关闭当前弹窗
  setTimeout(() => {
    if (!shareModal.classList.contains('hidden')) { // 防止用户手动关闭后重复执行
      shareModal.classList.add('hidden');
    }
  }, 3000);
});

// 社交按钮功能
const socialBtns = document.querySelectorAll('.social-btn');

socialBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const type = btn.getAttribute('data-type');
    const modal = document.getElementById(`${type}-modal`);

    if (modal) {
      modal.classList.remove('hidden'); // 显示对应弹窗（GitHub/微信/Envelope）
      // 3秒后自动关闭当前弹窗
      setTimeout(() => {
        if (!modal.classList.contains('hidden')) { // 防止用户手动关闭后重复执行
          modal.classList.add('hidden');
        }
      }, 3000);
    }
  });
});

// 页面加载时初始化收藏按钮状态
document.addEventListener('DOMContentLoaded', () => {
  updateFavoriteButtons();
  
  // 初始化分类资源区（课程和工具）
  const courseGrid = document.querySelector('#courses .resource-grid');
  const toolGrid = document.querySelector('#tools .resource-grid');
  
  resourceCards.forEach(card => {
      const categories = card.getAttribute('data-categories');
      const clone = card.cloneNode(true);
      // 更新克隆卡片中的收藏按钮事件
      const cloneBtn = clone.querySelector('.favorite-btn');
      cloneBtn.addEventListener('click', handleFavoriteClick);

      if (categories.includes('course')) {
          courseGrid.appendChild(clone);
      }
      if (categories.includes('tool')) {
          toolGrid.appendChild(clone);
      }
  });
});
// --- 修复和优化的代码结束 ---

// 更新公告弹窗功能
const updateNoticeBtn = document.getElementById('update-notice-btn');
const mobileUpdateNoticeBtn = document.getElementById('mobile-update-notice-btn');
const updateNoticeModal = document.getElementById('update-notice-modal');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const updateItems = document.querySelectorAll('.update-item');
const updateContents = document.querySelectorAll('.update-content');

// 打开弹窗
function openUpdateModal() {
  updateNoticeModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// 关闭弹窗
function closeUpdateModal() {
  updateNoticeModal.style.display = 'none';
  document.body.style.overflow = '';
}

// 绑定按钮事件
updateNoticeBtn.addEventListener('click', openUpdateModal);
if (mobileUpdateNoticeBtn) {
  mobileUpdateNoticeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openUpdateModal();
    // 关闭移动菜单（如果存在）
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.add('hidden');
  });
}

// 关闭按钮事件
closeModalBtns.forEach(btn => {
  btn.addEventListener('click', closeUpdateModal);
});

// 点击背景关闭弹窗
updateNoticeModal.addEventListener('click', (e) => {
  if (e.target === updateNoticeModal) {
    closeUpdateModal();
  }
});

// 切换更新内容
updateItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // 更新左侧列表样式
    updateItems.forEach(i => i.classList.remove('active', 'border-l-4', 'border-primary'));
    item.classList.add('active', 'border-l-4', 'border-primary');
    
    // 更新右侧内容
    updateContents.forEach(content => content.classList.add('hidden'));
    updateContents[index].classList.remove('hidden');
  });
});

// 处理所有分享按钮的点击事件（包括移动端）
document.querySelectorAll('.share-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const shareToast = document.getElementById('share-modal');
    // 显示弹窗
    shareToast.classList.remove('hidden');
    // 防止背景滚动
    document.body.style.overflow = 'hidden';

    // 3秒后自动关闭弹窗
    setTimeout(() => {
      shareToast.classList.add('hidden');
      // 恢复背景滚动
      document.body.style.overflow = '';
    }, 3000);
  });
});

// 等待页面所有元素加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 获取桌面端和移动端的背景按钮、动态背景元素
  const toggleBgDesktop = document.getElementById('toggle-bg');
  const toggleBgMobile = document.getElementById('toggle-bg-mobile');
  const dynamicBackground = document.getElementById('dynamic-background');

  // 确保元素存在（避免报错）
  if (toggleBgDesktop && toggleBgMobile && dynamicBackground) {
    // 定义切换背景的核心逻辑（复用桌面端已有的功能）
    function toggleBackground() {
      // 切换动态背景的显示/隐藏状态
      const isVisible = dynamicBackground.style.display !== 'none';
      dynamicBackground.style.display = isVisible ? 'none' : 'block';
      
      // 同步按钮图标（可选：点击后切换图标，更直观）
      const desktopIcon = toggleBgDesktop.querySelector('i');
      const mobileIcon = toggleBgMobile.querySelector('i');
      if (desktopIcon && mobileIcon) {
        const newIcon = isVisible ? 'wallpaper' : 'visibility_off';
        desktopIcon.textContent = newIcon;
        mobileIcon.textContent = newIcon;
      }
    }

    // 给桌面端和移动端按钮绑定相同的点击事件
    toggleBgDesktop.addEventListener('click', toggleBackground);
    toggleBgMobile.addEventListener('click', toggleBackground);
  }
});