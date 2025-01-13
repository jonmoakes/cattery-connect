const useSubmitAddCat = () => {
  const submitAddCat = (e) => {
    e.preventDefault();
    alert("cat added!");
  };

  return { submitAddCat };
};

export default useSubmitAddCat;
