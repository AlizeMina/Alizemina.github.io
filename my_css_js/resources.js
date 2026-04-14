// 资源卡片数据
const resources = [
  {
    id: "1",
    title: "亓振莲python数据分析",
    description: "专业的Python数据分析学习资源，适合入门到进阶的学习者",
    categories: "course python",
    icon: "fa-code",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    tagText: "Python",
    tagBg: "bg-blue-100/70 hover:bg-blue-100/90",
    tagColor: "text-primary",
    url: "https://wwp.lanzoul.com/b0pn60x3g",
    password: "Alizemina",
    buttonBg: "bg-primary/70 hover:bg-primary/90"
  },
  {
    id: "2",
    title: "郭庆文机器学习数据挖掘与分析",
    description: "全面的机器学习与数据挖掘教程，涵盖核心算法与实战案例",
    categories: "course ai",
    icon: "fa-area-chart",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    tagText: "机器学习",
    tagBg: "bg-purple-100/70 hover:bg-purple-100/90",
    tagColor: "text-accent",
    url: "https://wwp.lanzoul.com/b0pn60xad",
    password: "Alizemina",
    buttonBg: "bg-accent/70 hover:bg-accent/90"
  },
  {
    id: "7",
    title: "郭庆文人工智能数据服务",
    description: "来自郭庆文专业导师认可的精选教材课件，包含其他相关教学资料",
    categories: "course ai",
    icon: "fa-bar-chart",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-500",
    tagText: "数据服务",
    tagBg: "bg-pink-100/70 hover:bg-pink-100/90",
    tagColor: "text-pink-500",
    url: "https://wwamb.lanzoul.com/b0pngke7g",
    password: "Alizemina",
    buttonBg: "bg-pink-500/70 hover:bg-pink-500/90"
  },
  {
    id: "3",
    title: "陈超——定位巡航",
    description: "定位巡航技术详解，包含原理分析与实际应用案例",
    categories: "course ai",
    icon: "fa-location-arrow",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    tagText: "定位巡航",
    tagBg: "bg-teal-100/70 hover:bg-teal-100/90",
    tagColor: "text-secondary",
    url: "https://wwp.lanzoul.com/b0pn60xha",
    password: "Alizemina",
    buttonBg: "bg-secondary/70 hover:bg-secondary/90"
  },
  {
    id: "4",
    title: "陈超——计算机视觉",
    description: "计算机视觉核心技术与应用，从基础到高级的系统学习资源",
    categories: "course ai",
    icon: "fa-eye",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
    tagText: "计算机视觉",
    tagBg: "bg-orange-100/70 hover:bg-orange-100/90",
    tagColor: "text-orange-500",
    url: "https://wwp.lanzoul.com/b0pn60xqj",
    password: "Alizemina",
    buttonBg: "bg-orange-500/70 hover:bg-orange-600"
  },
  {
    id: "8",
    title: "陈超——Pytorch深度学习",
    description: "基于 PyTorch 框架，掌握深度学习核心技能。",
    categories: "course ai",
    icon: "fas fa-laptop-code",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-500",
    tagText: "Pytorch",
    tagBg: "bg-yellow-100/70 hover:bg-yellow-100/90",
    tagColor: "text-yellow-500",
    url: "https://wwamb.lanzoul.com/b0pnh1agd",
    password: "Alizemina",
    buttonBg: "bg-yellow-500/70 hover:bg-yellow-600"
  },
  {
    id: "9",
    title: "陈宜祺智能安防应用开发",
    description: "智能安防应用开发，掌握安防系统开发核心技能。",
    categories: "course",
    icon: "fas fa-computer",
    iconBg: "bg-purple-600/10",
    iconColor: "text-purple-600",
    tagText: "智能安防",
    tagBg: "bg-purple-100/70 hover:bg-purple-100/90",
    tagColor: "text-purple-600",
    url: "https://wwamb.lanzoul.com/b0pnhn3mj",
    password: "Alizemina",
    buttonBg: "bg-purple-600/70 hover:bg-purple-700"
  },
  {
    id: "5",
    title: "工具（杂）",
    description: "各类实用工具集合，满足学习和工作中的多样化需求",
    categories: "tool",
    icon: "fa-wrench",
    iconBg: "bg-gray-700/10",
    iconColor: "text-gray-700",
    tagText: "工具集",
    tagBg: "bg-gray-100/70 hover:bg-gray-100/90",
    tagColor: "text-gray-700",
    url: "https://wwp.lanzoul.com/b0pn60xud",
    password: "Alizemina",
    buttonBg: "bg-gray-700/70 hover:bg-gray-800"
  },
  {
    id: "6",
    title: "软件安装包",
    description: "各类常用软件安装包，包含开发工具、设计软件等",
    categories: "tool",
    icon: "fa-download",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
    tagText: "安装包",
    tagBg: "bg-green-100/70 hover:bg-green-100/90",
    tagColor: "text-green-500",
    url: "https://wwp.lanzoul.com/b0pn60y7g",
    password: "Alizemina",
    buttonBg: "bg-green-500/70 hover:bg-green-600"
  }
];

// 生成资源卡片
function generateResourceCards() {
  const resourceGrid = document.querySelector('.resource-grid');
  if (!resourceGrid) return;
  
  resourceGrid.innerHTML = '';
  
  resources.forEach(resource => {
    const card = document.createElement('div');
    card.className = `resource-card bg-white rounded-xl shadow-card hover:shadow-card-hover card-transition p-6`;
    card.setAttribute('data-categories', resource.categories);
    card.setAttribute('data-id', resource.id);
    
    card.innerHTML = `
      <div class="flex items-start justify-between mb-4">
        <div class="${resource.iconBg} ${resource.iconColor} p-2 rounded-lg">
          <i class="${resource.icon} text-xl"></i>
        </div>
        <div class="flex items-center">
          <span class="${resource.tagBg} ${resource.tagColor} text-xs px-2 py-1 rounded-full mr-2">${resource.tagText}</span>
        </div>
      </div>
      <h3 class="text-lg font-semibold mb-2 line-clamp-2">${resource.title}</h3>
      <p class="text-gray-500 text-sm mb-4 line-clamp-2">
        ${resource.description}
      </p>
      <div class="flex flex-col space-y-3">
        <div class="relative">
          <input type="text" value="${resource.url}" readonly class="w-full bg-gray-50/60 hover:bg-gray-50/90 rounded-lg px-3 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary">
          <button class="copy-btn absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary" data-target="${resource.url}">
            <i class="fa fa-copy"></i>
          </button>
        </div>
        <div class="flex items-center justify-between bg-gray-50/60 hover:bg-gray-50/90 rounded-lg px-3 py-2 border border-gray-200">
          <span class="text-sm text-gray-600">提取密码:</span>
          <div class="flex items-center">
            <span class="password-text text-sm font-medium mr-2">${resource.password}</span>
            <button class="copy-btn text-gray-400 hover:text-primary" data-target="${resource.password}">
              <i class="fa fa-copy"></i>
            </button>
          </div>
        </div>
        <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="w-full ${resource.buttonBg} text-white text-center py-2 rounded-lg transition-all font-medium text-sm">
          立即访问 <i class="fa fa-external-link ml-1"></i>
        </a>
      </div>
    `;
    
    resourceGrid.appendChild(card);
  });
  
  // 重新绑定复制功能
  bindCopyButtons();
}

// 绑定复制按钮事件
function bindCopyButtons() {
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
}

// 页面加载完成后生成资源卡片
document.addEventListener('DOMContentLoaded', generateResourceCards);