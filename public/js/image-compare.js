// 图像对比滑块功能实现 - 使用clip-path而非改变宽度
function initImageCompare() {
    // 获取所有图像对比容器
    const containers = document.querySelectorAll('.image-compare-container');
    
    containers.forEach(container => {
        // 获取元素
        const slider = container.querySelector('.image-compare-slider');
        const beforeImg = container.querySelector('.image-compare-before');
        const afterImg = container.querySelector('.image-compare-after');
        const handle = container.querySelector('.image-compare-handle');
        
        // 设置初始状态
        let isDragging = false;
        let containerWidth = container.offsetWidth;
        
        // 初始化显示效果 - 使用clip-path替代改变宽度
        beforeImg.style.width = '100%'; // 保持图片宽度不变
        beforeImg.style.clipPath = 'inset(0 50% 0 0)'; // 初始裁剪为显示左半部分
        handle.style.left = '50%';
        
        // 处理鼠标/触摸事件
        function moveSlider(e) {
            if (!isDragging) return;
            
            // 获取相对于容器的位置
            const rect = slider.getBoundingClientRect();
            let x;
            
            if (e.type.includes('mouse')) {
                x = e.clientX;
            } else if (e.touches && e.touches.length > 0) {
                x = e.touches[0].clientX;
            } else {
                return;
            }
            
            const pos = ((x - rect.left) / containerWidth) * 100;
            
            // 限制在0-100%之间
            const clampedPos = Math.max(0, Math.min(100, pos));
            
            // 更新滑块位置 - 使用clip-path而非改变宽度
            beforeImg.style.clipPath = `inset(0 ${100 - clampedPos}% 0 0)`;
            handle.style.left = clampedPos + '%';
            
            // 防止默认行为
            e.preventDefault();
        }
        
        // 鼠标事件 - 在slider和handle上都添加事件监听，只响应左键
        slider.addEventListener('mousedown', (e) => {
            if (e.button === 0) { // 0 表示鼠标左键
                isDragging = true;
                // 添加鼠标捕获，确保即使鼠标离开滑块区域也能继续拖动
                slider.style.cursor = 'ew-resize';
                document.body.style.cursor = 'ew-resize';
            }
        });
        
        handle.addEventListener('mousedown', (e) => {
            if (e.button === 0) { // 0 表示鼠标左键
                isDragging = true;
                slider.style.cursor = 'ew-resize';
                document.body.style.cursor = 'ew-resize';
                e.preventDefault(); // 防止文本选择
            }
        });
        
        // 移动事件需要绑定到document以确保流畅拖动
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                moveSlider(e);
            }
        });
        
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                slider.style.cursor = 'ew-resize';
                document.body.style.cursor = 'default';
            }
        });
        
        // 触摸事件（移动端）
        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
            e.preventDefault(); // 防止页面滚动
        });
        
        document.addEventListener('touchmove', (e) => {
            if (isDragging) {
                moveSlider(e);
            }
        }, { passive: false }); // 必须设置passive为false才能在touchmove中preventDefault
        
        document.addEventListener('touchend', () => {
            if (isDragging) {
                isDragging = false;
            }
        });
        
        // 点击容器直接跳转位置，只响应左键
        slider.addEventListener('click', (e) => {
            if (!isDragging && e.button === 0) { // 0 表示鼠标左键
                const rect = slider.getBoundingClientRect();
                const x = e.clientX;
                const pos = ((x - rect.left) / containerWidth) * 100;
                const clampedPos = Math.max(0, Math.min(100, pos));
                
                // 使用clip-path而非改变宽度
                beforeImg.style.clipPath = `inset(0 ${100 - clampedPos}% 0 0)`;
                handle.style.left = clampedPos + '%';
            }
        });
        
        // 响应式调整
        function handleResize() {
            const newWidth = container.offsetWidth;
            // 计算当前的百分比位置
            const currentClipPath = beforeImg.style.clipPath || 'inset(0 50% 0 0)';
            const match = currentClipPath.match(/inset\(0 (\d+)% 0 0\)/);
            const rightPercent = match ? parseInt(match[1]) : 50;
            const currentPos = 100 - rightPercent;
            
            containerWidth = newWidth; // 更新容器宽度
            handle.style.left = currentPos + '%';
        }
        
        window.addEventListener('resize', handleResize);
        
        // 为了更好的用户体验，设置鼠标样式
        slider.style.cursor = 'ew-resize';
        handle.style.cursor = 'ew-resize';
    });
}

// 当文档加载完成后初始化图像对比功能
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageCompare);
} else {
    // 如果DOM已经加载完成，立即初始化
    initImageCompare();
}