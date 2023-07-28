import { RootState, AppDispatch } from './../../store';
import { loadingFindCities, setCities } from './autocompleteSlice';

export const getCities = (name:string) => {
    return (dispatch: AppDispatch, getState: RootState) => {
        console.log(getState);
        
        dispatch(loadingFindCities());
        
        // dispatch(setCities())
        
    }
}