import { Mail, Phone, MapPin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-neon-blue/60 bg-dark-panel pt-12 pb-8 px-4">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent" />

      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xl font-bold text-white">姚强</h3>
            <p className="mb-1 text-sm text-neon-blue">Unity3D 游戏开发工程师</p>
            <p className="mb-1 text-sm text-neon-purple">全栈开发工程师</p>
            <p className="mb-1 text-sm text-neon-yellow">独立游戏开发者</p>
            <p className="text-sm text-accent-green">新技术研究员</p>

          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
              联系方式
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:348531613@qq.com"
                className="flex items-center gap-2 text-sm text-gray-300 transition-colors duration-200 hover:text-neon-blue"
              >
                <Mail className="h-4 w-4 text-neon-blue" />
                348531613@qq.com
              </a>
              <a
                href="tel:13144436445"
                className="flex items-center gap-2 text-sm text-gray-300 transition-colors duration-200 hover:text-neon-blue"
              >
                <Phone className="h-4 w-4 text-neon-blue" />
                13144436445
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-neon-purple" />
                广州 | 全职 | 面议
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
              社交链接
            </h4>
            <a
              href="https://github.com/yaoQQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors duration-200 hover:text-neon-purple"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700/50 pt-6 text-center">
          <p className="text-sm text-gray-400">
            期待与您共同探讨游戏技术的无限可能
          </p>
        </div>
      </div>
    </footer>
  )
}
