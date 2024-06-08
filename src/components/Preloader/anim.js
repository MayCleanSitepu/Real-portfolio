export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 1, delay: 0.2}
    },
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: {duration: 0.5, ease: [.08,.52,.95,.27], delay: 0.2}
    }
}