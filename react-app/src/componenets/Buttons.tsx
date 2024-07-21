

interface Props {
    children :string;
    color? :'primary' | 'secondary';
    onClick: () => void;
}

export const Buttons = ({children,onClick,color='primary'}:Props) => {
  return (
    <button className={"btn btn-"+ color } onClick={onClick}>{children}</button>
  )
}
