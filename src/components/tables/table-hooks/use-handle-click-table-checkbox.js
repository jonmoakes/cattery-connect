const useHandleClickTableCheckbox = () => {
  const handleClickTableCheckbox = (row, selectedFlatRows) => {
    if (!row.isSelected) {
      selectedFlatRows.forEach((selectedRow) => {
        selectedRow.toggleRowSelected(false);
      });
      row.toggleRowSelected(true);

      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } else {
      row.toggleRowSelected(false);
    }
  };

  return { handleClickTableCheckbox };
};

export default useHandleClickTableCheckbox;
