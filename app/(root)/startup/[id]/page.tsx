const StartupPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return (
    <>
      <h1>This is page id {id}</h1>
    </>
  );
};

export default StartupPage;
