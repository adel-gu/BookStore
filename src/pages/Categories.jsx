// Redux methods
import { useSelector, useDispatch } from 'react-redux';
// Status action creator
import { statusCheck } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className='w-50 mx-auto mt-5 pt-3 text-center top-50 start-50'>
      <button
        type="button"
        className='primary-btn'
        onClick={() => {
          dispatch(statusCheck());
        }}
      >
        Check status
      </button>
      <h1 className='mt-3'>{status}</h1>
    </div>
  );
};

export default Categories;
