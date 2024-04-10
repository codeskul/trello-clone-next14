const IdPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <p>ID : {params.id}</p>
    </div>
  );
};

export default IdPage;
