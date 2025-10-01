import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children, title }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="hidden md:block fixed left-0 top-0 z-50 h-full overflow-auto bg-white w-[256px]">
        <Sidebar />
      </div>

      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="p-0 w-[260px] overflow-auto bg-white">
          <Sidebar />
        </SheetContent>
      </Sheet>

      <div className="flex flex-col w-full pl-[0] sm:pl-[0] md:pl-[256px]">
          <div className={'bg-white border-gray-200'}>
              <Header
                  title={title}
                  onMenuClick={() => setIsMobileMenuOpen(true)}
              />

              <main className="flex-1">
                  <div>
                      {children}
                  </div>

              </main>
          </div>
      </div>
    </div>
  )
}

export default Layout
