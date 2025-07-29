import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Badge } from '../ui/badge';
import { Menu, Bell, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onConnect: () => void;      // Should handle both login and logout
  isConnected: boolean;
  address?: string;
}

const Header: React.FC<HeaderProps> = ({ onConnect, isConnected, address }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Research Platform', href: '/research' },
    { name: 'Governance', href: '/governance' },
    { name: 'IP Ownership', href: '/ip-ownership' },
    { name: 'Data Sovereignty', href: '/data-sovereignty' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-lg font-bold text-primary-foreground">DV</span>
          </div>
          <span className="font-bold text-xl text-foreground">DeVite</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-smooth hover:text-primary ${isActive(item.href) ? 'text-primary' : 'text-muted-foreground'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent">
              3
            </Badge>
          </Button>

          {isConnected ? (
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                {address ? address.slice(0, 8) + '...' : 'Profile'}
              </Button>
              <Button variant="ghost" size="icon" onClick={onConnect}>
                <User className="h-4 w-4" />
                {/* This acts as "Sign Out" */}
              </Button>
            </div>
          ) : (
            <Button onClick={onConnect} variant="hero" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign in
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-6">
              <div className="flex items-center space-x-2 pb-4 border-b">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">DV</span>
                </div>
                <span className="font-bold text-xl">DeVite</span>
              </div>

              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`p-3 rounded-lg transition-smooth hover:bg-accent ${isActive(item.href) ? 'bg-accent text-primary' : 'text-muted-foreground'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="pt-4 border-t">
                {isConnected ? (
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      {address ? address.slice(0, 8) + '...' : 'Profile'}
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" onClick={onConnect}>
                      <User className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button onClick={onConnect} variant="hero" className="w-full">
                    <User className="h-4 w-4 mr-2" />
                    Sign in
                  </Button>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;