interface Course {
  name: string
  prices: number[]
}

enum SortTypes {
  LOW_TO_HIGH_PRICE,
  HIGH_TO_LOW_PRICE,
}

// Список курсов
// const courses: Course[] = [
//   { name: "Courses in England", prices: [0, 100] },
//   { name: "Courses in Germany", prices: [500, null] },
//   { name: "Courses in Italy", prices: [100, 200] },
//   { name: "Courses in Russia", prices: [null, 400] },
//   { name: "Courses in China", prices: [50, 250] },
//   { name: "Courses in USA", prices: [200, null] },
//   { name: "Courses in Kazakhstan", prices: [56, 324] },
//   { name: "Courses in France", prices: [null, null] },
// ]

// Варианты цен (фильтры), которые ищет пользователь
// const requiredRange1 = [null, 200]
// const requiredRange2 = [100, 350]
// const requiredRange3 = [200, null]

const filterCourses = function (
  courses: Course[],
  filterRange: number[]
): Course[] {
  if (!courses.length || filterRange.length !== 2) {
    return courses
  }

  const minFilter = filterRange[0]
  const maxFilter = filterRange[1]

  return courses.filter((course) => {
    const minPrice = course.prices[0]
    const maxPrice = course.prices[1]

    if (minFilter !== null) {
      if (minPrice !== null && minPrice < minFilter) {
        return false
      } else if (maxPrice !== null && maxPrice < minFilter) {
        return false
      }
    }

    if (maxFilter !== null) {
      if (maxPrice !== null && maxPrice > maxFilter) {
        return false
      } else if (minPrice !== null && minPrice > maxFilter) {
        return false
      }
    }

    return true
  })
}

const sortCourses = function (courses: Course[], sortType: number): Course[] {
  if (sortType === SortTypes.LOW_TO_HIGH_PRICE) {
    return courses.sort((a, b) => {
      return a.prices[0] - b.prices[0]
    })
  }

  if (sortType === SortTypes.HIGH_TO_LOW_PRICE) {
    return courses.sort((a, b) => {
      return b.prices[0] - a.prices[0]
    })
  }
}
