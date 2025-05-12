import { Container } from './container';
import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../ui/button';
import {User} from 'lucide-react';
import {ShoppingCart} from 'lucide-react';

interface Props {
    className?: string;
  }  

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        <div className='flex item-center gap-4'>
          <div>
            <img src='pizza.svg' alt=''></img>
          </div>
          <div className='text'>
          <h1><p className='text-sm font-black uppercase text-2xl'>NEXT PIZZA</p>
          вкусней уже некуда</h1>
          </div>
        </div>
        <div className='flex item-right gap-4'>
          <div>
            <Button variant={'outline'}>
            <User size={16}/>Войти
            </Button>
          </div>
          <div>
            <Button variant={'outline'}>
            <ShoppingCart size={16}/>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}