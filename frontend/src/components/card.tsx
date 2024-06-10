type CardProps = {
  image: string;
};

export function Card(props: CardProps) {
  return (
    <div className="w-full h-full text-foreground m-16">
      <img className="max-w-160 rounded-lg" src={props.image} alt="" />
    </div>
  );
}
