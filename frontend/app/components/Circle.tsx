const Circle = (props: any) => {
  // const className = `bg-[${props.color}]`;
  return (
    <div
      className={`h-64 aspect-square bg-[${props.color}] rounded-full`}
    ></div>
  );
};

export default Circle;
