export const updateUser = (first_name, last_name) => {
  return (dispatch) => {
    $.ajax({
        type: 'PUT',
        url: '/api/user',
        dataType: 'JSON',
        data: { user: { first_name, last_name }}
    }).done (user => {
      dispatch({ type: 'UPDATE_USER', user })
      Materialize.toast('User Name Updated', 3000);
    }).fail (data => {
      console.log(data);
    });
  }
}

export const deleteUser = (id) => {
  return (dispatch) => {
    $.ajax({
      type: 'DELETE',
      url: `/api/user/${id}`,
      dataType: 'JSON',
    }).done (user => {
      dispatch({ type: 'RESET_REPS'})
      dispatch({ type: 'DELETE_USER', id })
    }).fail (data => {
      console.log(data);
    });
  }
}
