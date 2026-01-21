const Filter =({search,handelSearchChage})=>{
    return(
        <>
          <label>
        filter shown with
        <input type="text" value={search} onChange={handelSearchChage} name="search" />
      </label>
        </>
    )
}
export default Filter