import React, { useEffect, useRef } from 'react';

const Header = () => {
    const headerRef = useRef();

    useEffect(() => {
        const onScroll = () => {
            if (document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('scrolled');
            } else {
                headerRef.current.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <header ref={headerRef}>
            My Best Site!
        </header>
    )
}

import React, { useEffect, useState } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const newIsScrolled = document.documentElement.scrollTop > 100;

            if (isScrolled === newIsScrolled) return;
            
            setIsScrolled(newIsScrolled);
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [isScrolled, setIsScrolled]);

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            My Best Site!
        </header>
    )
}
