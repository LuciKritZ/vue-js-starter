// For global constants, the naming convention should be all caps and with the underscore when there are more than one
// terms. This is called namespaces.
export const DOUBLE_COUNTER = 'counter/DOUBLE_COUNTER';
export const CLICK_COUNTER = 'counter/CLICK_COUNTER';

// By doing this, we can ensure that the names and strings are unique because the strings are the method names in the end
// because we assign them dynamically here. We ensure that these strings are unique because we prefix them with the
// module name. 
// This might be a lot of work, but this might be worth it since in large applications, this really ensures that you're
// not duplicating or using the same name again. 