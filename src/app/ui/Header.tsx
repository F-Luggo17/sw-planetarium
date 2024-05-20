type TitleProps = {
    name: string;
    description: string;
};

export const Header = ({name, description}: TitleProps) => {
  return (
    <p className="flex gap-3 items-center p-x-4">
        <span className="text-xl md:text-3xl font-bold">{ name }</span>
        { description != '' ? <span className="text-sm">({ description })</span> : '' }
    </p>
  )
}
