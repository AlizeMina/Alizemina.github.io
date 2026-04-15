(function() {
  const updateNoticeHTML = `
    <div id="update-notice-modal" class="fixed inset-0 bg-black/50 modal-backdrop z-50 hidden items-center justify-center p-4">
      <div class="bg-white rounded-xl p-6 max-w-4xl w-full modal-animation max-h-[60vh] flex flex-col">
        <!-- 弹窗头部 -->
        <div class="text-center mb-6 border-b pb-4">
          <h3 class="text-xl font-bold">更新公告</h3>
        </div>
        
        <!-- 弹窗内容区 -->
            <div class="flex flex-1 overflow-hidden">
              <!-- 左侧列表 -->
              <div class="w-1/3 border-r overflow-y-auto">
                <div class="update-item active p-4 hover:bg-gray-50 cursor-pointer border-l-4 border-primary">
                  <div class="font-medium">V2.1.0.HDBCNAL</div>
                  <div class="text-sm text-gray-500">2026-1-16</div>
                </div>
                <div class="update-item p-4 hover:bg-gray-50 cursor-pointer">
                  <div class="font-medium">V2版本预告</div>
                  <div class="text-sm text-gray-500">2025-12-27</div>
                </div>
                <div class="update-item p-4 hover:bg-gray-50 cursor-pointer">
                  <div class="font-medium">V1.3.0.HDBCNAL</div>
                  <div class="text-sm text-gray-500">2025-12-04</div>
                </div>
                <div class="update-item p-4 hover:bg-gray-50 cursor-pointer">
                  <div class="font-medium">V1.2.0.HDBCNAL</div>
                  <div class="text-sm text-gray-500">2025-11-26</div>
                </div>
                <div class="update-item p-4 hover:bg-gray-50 cursor-pointer">
                  <div class="font-medium">V1.1.0.HDBCNAL</div>
                  <div class="text-sm text-gray-500">2025-11-23</div>
                </div>
              </div>
              
              <!-- 右侧内容 -->
              <div class="w-2/3 p-6 overflow-y-auto">
                <div class="update-content active">
                  <h4 class="text-lg font-bold mb-3">V2.1.0.HDBCNAL 更新内容</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <i class="fa fa-plus-circle text-green-500 mt-1 mr-2"></i>
                      <span>1、新增樱花落叶效果！满树樱飞，不及你眉眼含笑。樱落满径，不及你半步走近。</span>
                    </li>
                    <li class="flex items-start">
                      <i class="	fa fa-volume-up text-green-500 mt-1 mr-2"></i>
                      <span>2、音乐播放器正式上线！歌单暂不支持自定义，感兴趣的话可以联系阿离，在你的非共享版本或服务器版本中修改为你喜欢的音乐歌单。</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-plus-circle text-green-500 mt-1 mr-2"></i>
                      <span>3、新增随机播放壁纸功能，由于依赖外部壁纸链接，暂时无法自定义壁纸，但你可以在非共享版本或服务器版本中修改壁纸链接，换成你喜欢的壁纸。</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-wrench text-green-500 mt-1 mr-2"></i>
                      <span>4、优化界面布局，更多状态细节展示，包括但不限于：鼠标悬停时的按钮/卡片的颜色变化，部分按钮的文字变化等。</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-exclamation-triangle text-yellow-500 mt-1 mr-2"></i>
                      <span>5、修复已知问题，但部分库依赖大佬服务器内的运行文件，调用速度较慢，如组件无法加载，请切换较好的网络环境并重新加载。</span>
                    </li>
                    <li class="flex items-start">
                      <i class="	fa fa-volume-up text-green-500 mt-1 mr-2"></i>
                      <span>6、预告：将在未来V2版本加入打赏网页，但这并非强制性的，白嫖也可以正常使用！以后也会加入彩蛋网站整合页面，具体功能敬请期待！</span>
                    </li>
                  </ul>
                </div>
                <div class="update-content hidden">
                  <h4 class="text-lg font-bold mb-3">作者的话（V2版本更新预告）</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <span>阿离正在努力研发V2版本，预计发布时间未定，但现阶段已完成在机房电脑服务器版本中进行部分功能性测试，且效果优越！</span>
                    </li>
                    <li class="flex items-start">
                      <span>由于资金原因，目前暂无个人服务器，暂时无法对公开版本（正式版及beta版）调用网页所需要的运行文件（css、js等），只能依赖外部现有大佬的服务器里面的文件，敬请谅解！</span>
                    </li>
                    <li class="flex items-start">
                      <span>感兴趣的话，可以找阿离要服务器版本的文件，可以实现更多功能，例如自定义壁纸、自定义音乐歌单、自定义主题等。更多功能等你来开发！阿离将在服务器版本中努力同步更新最新功能，敬请期待！</span>
                    </li>
                    <li class="flex items-start">
                      <span>V2版本将新增以下功能(现阶段已实现功能)：</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-plus-circle text-green-500 mt-1 mr-2"></i>
                      <span>1、新增樱花落叶效果！（在服务器版本已通过测试）满树樱飞，不及你眉眼含笑。樱落满径，不及你半步走近。</span>
                    </li>
                    <li class="flex items-start">
                      <i class="	fa fa-volume-up text-green-500 mt-1 mr-2"></i>
                      <span>2、音乐播放器归属V2版本内容，但已在V1部分版本实现该功能，欢迎体验！歌单暂不支持自定义，感兴趣的话可以联系阿离，在你的非共享版本或服务器版本中修改为你喜欢的音乐歌单。</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-plus-circle text-green-500 mt-1 mr-2"></i>
                      <span>3、新增随机播放壁纸功能，由于依赖外部壁纸API，暂时无法自定义壁纸，但你可以在非共享版本或服务器版本中修改api，使用你喜欢的壁纸API。</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-wrench text-green-500 mt-1 mr-2"></i>
                      <span>4、优化界面布局，更多状态细节展示，例如鼠标悬停时的按钮/卡片的颜色变化，部分按钮的文字变化等。</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-exclamation-triangle text-yellow-500 mt-1 mr-2"></i>
                      <span>5、修复已知问题，但部分库依赖大佬服务器内的运行文件，调用速度较慢，如组件无法加载，请切换较好的网络环境并重新加载。</span>
                    </li>
                  </ul>
                </div>
                <div class="update-content hidden">
                  <h4 class="text-lg font-bold mb-3">V1.3.0.HDBCNAL 更新内容</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <i class="fa fa-exclamation-triangle text-red-500 mt-1 mr-2"></i>
                      <span>浏览器缓存删除后不会保留收藏记录，但正常退出依旧会有保留，清理浏览器缓存时要注意！</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-plus-circle text-green-500 mt-1 mr-2"></i>
                      <span>新增东方Project音乐播放器！你问我V1.1.3.beta的哈基米去哪里了？pass！</span>
                    </li>
                    <li class="flex items-start">
                      <span>喜欢哈基米歌单的话，可以在网易云音乐听！哈基米网易云音乐歌单ID：12511958644</span>
                    </li>
                    <li class="flex items-start">
                      <span>此情试问寄何处，华鸟风月，也依旧消长。静待云破吐月光，今生无悔幻想乡！</span>
                    </li>
                  </ul> 
                </div>
                <div class="update-content hidden">
                  <h4 class="text-lg font-bold mb-3">V1.2.0.HDBCNAL 更新内容</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <i class="fa fa-plus-circle text-green-500 mt-1 mr-2"></i>
                      <span>新增更新公告！更快看到最新更新内容！移动端网页的更新公告在折叠菜单栏里面</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-plus-circle text-green-500 mt-1 mr-2"></i>
                      <span>新增分享链接！这次分享按钮终于有用了……吗？快去看看吧！</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-plus-circle text-green-500 mt-1 mr-2"></i>
                      <span>新增2个彩蛋，现已有4个彩蛋！等你来发现！</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-plus-circle text-green-500 mt-1 mr-2"></i>
                      <span>新增网站运行时间，可以查看已运行时间！</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-wrench text-green-500 mt-1 mr-2"></i>
                      <span>优化了资源卡片的加载速度</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-bug text-red-500 mt-1 mr-2"></i>
                      <span>修复了收藏功能偶尔失效的问题</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-exclamation-triangle text-yellow-500 mt-1 mr-2"></i>
                      <span>暂时不清楚浏览器缓存删除后还会不会保留收藏记录，大概率不会保留</span>
                    </li>
                  </ul>
                </div>
                <div class="update-content hidden">
                  <h4 class="text-lg font-bold mb-3">V1.1.0.HDBCNAL 更新内容</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <i class="fa fa-plus-circle text-green-500 mt-1 mr-2"></i>
                      <span>新增特殊彩蛋跳转警告，麻麻再也不用担心我用校园网看学习网站啦！</span>	
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-podcast text-green-500 mt-1 mr-2"></i>
                      <span>现已有2个彩蛋！</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-plus-circle text-green-500 mt-1 mr-2"></i>
                      <span>新增滚动公告……你也看到了对吧！</span>	
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-wrench text-green-500 mt-1 mr-2"></i>
                      <span>优化：”加载更多资源“按钮更抽象了！快看看有什么新的变化吧！</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-bug text-red-500 mt-1 mr-2"></i>
                      <span>修复：网页重构！修复对应的beta版本无法正常使用的问题</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-bug text-red-500 mt-1 mr-2"></i>
                      <span>修复无法自动关闭部分弹窗的问题</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-plus-circle text-green-500 mt-1 mr-2"></i>
                      <span>新增版本号，可以找 阿离Alize 反馈问题，联系方式你们都有！</span>	
                    </li>
                    <li class="flex items-start">
                      <i class="fa fa-plus-circle text-green-500 mt-1 mr-2"></i>
                      <span>新增beta版本，是新的链接，有需要可以联系 阿离Alize 获取beta版测试资格！抢先一步体验新功能！小鹿姐姐快人一步！（doge）</span>	
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- 弹窗底部 -->
            <div class="mt-6 border-t pt-4">
              <button class="close-modal-btn w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg transition-all font-medium">
                关闭
              </button>
            </div>
          </div>
        </div>
  `;

  function initUpdateNotice() {
    document.body.insertAdjacentHTML('beforeend', updateNoticeHTML);
    
    const updateNoticeBtn = document.getElementById('update-notice-btn');
    const mobileUpdateNoticeBtn = document.getElementById('mobile-update-notice-btn');
    const updateNoticeModal = document.getElementById('update-notice-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal-btn');
    const updateItems = document.querySelectorAll('.update-item');
    const updateContents = document.querySelectorAll('.update-content');
    
    function openUpdateModal() {
      updateNoticeModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
    
    function closeUpdateModal() {
      updateNoticeModal.style.display = 'none';
      document.body.style.overflow = '';
    }
    
    if (updateNoticeBtn) {
      updateNoticeBtn.addEventListener('click', openUpdateModal);
    }
    
    if (mobileUpdateNoticeBtn) {
      mobileUpdateNoticeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openUpdateModal();
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.add('hidden');
      });
    }
    
    closeModalBtns.forEach(btn => {
      btn.addEventListener('click', closeUpdateModal);
    });
    
    updateNoticeModal.addEventListener('click', (e) => {
      if (e.target === updateNoticeModal) {
        closeUpdateModal();
      }
    });
    
    updateItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        updateItems.forEach(i => i.classList.remove('active', 'border-l-4', 'border-primary'));
        item.classList.add('active', 'border-l-4', 'border-primary');
        
        updateContents.forEach(content => content.classList.add('hidden'));
        updateContents[index].classList.remove('hidden');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUpdateNotice);
  } else {
    initUpdateNotice();
  }
})();
