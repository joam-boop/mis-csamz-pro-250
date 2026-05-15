// ======================================
// SAVE DATA TO LOCAL STORAGE
// ======================================

export function saveData(key, data){

  try{

    localStorage.setItem(
      key,
      JSON.stringify(data)
    )

  }catch(error){

    console.error(
      `Error saving ${key}:`,
      error
    )

  }

}

// ======================================
// GET DATA FROM LOCAL STORAGE
// ======================================

export function getData(key){

  try{

    const data =
      localStorage.getItem(key)

    return data
      ? JSON.parse(data)
      : []

  }catch(error){

    console.error(
      `Error getting ${key}:`,
      error
    )

    return []

  }

}

// ======================================
// REMOVE SINGLE ITEM
// ======================================

export function removeData(key){

  try{

    localStorage.removeItem(key)

  }catch(error){

    console.error(
      `Error removing ${key}:`,
      error
    )

  }

}

// ======================================
// CLEAR ALL STORAGE
// ======================================

export function clearAllData(){

  try{

    localStorage.clear()

  }catch(error){

    console.error(
      'Error clearing localStorage:',
      error
    )

  }

}