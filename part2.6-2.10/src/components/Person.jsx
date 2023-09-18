const Person = ({ person }) => {
  const Button = (props) => {
    return <button> {props.text}</button>;
  };
  // onClick={props.handleClick}

  return (
    <div>
      <p>
        {person.name} {person.number}{" "}
        <Button handleClick={person} text="delete" />
      </p>
    </div>
  );
};

export default Person;
