interface ContainerProps{
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return(<div
    className="
    max-w[1280px]
    mx-auto
    xl:px-20px
    md:px-2
    px-4
    "
    >
        {children}
    </div>);
}

export  default Container;