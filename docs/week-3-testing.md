# Week 3 – Manual Testing Report

**Project:** Learning Resource Directory  
**Testing method:** Manual browser testing  
**Testing environment:** Google Chrome  
**Testing date:** 15 November 2026


# Week 3 – Manual Testing Report

## Testing Summary

I manually tested the search and filtering functionality of Elevate Remember to confirm that users can find resources, combine filters, clear selections, and navigate the interface using a keyboard.

**Overall result:** 8 tests passed, 0 failed.

## Test Cases

### Test 1: Search by Exact Title
- **Action:** Enter the exact title of an existing resource in the search field.
- **Expected result:** The matching resource should appear.
- **Actual result:** The matching resource appeared correctly.
- **Status:** Pass

### Test 2: Search by Partial Keyword
- **Action:** Enter part of a resource title or a keyword.
- **Expected result:** Resources matching the entered keyword should appear.
- **Actual result:** Relevant matching resources appeared.
- **Status:** Pass

### Test 3: Search With No Matching Results
- **Action:** Enter a keyword that does not match any available resource.
- **Expected result:** A clear no-results message should be displayed.
- **Actual result:** The application displayed the no-results state correctly.
- **Status:** Pass

### Test 4: Apply an Individual Filter
- **Action:** Select one category filter.
- **Expected result:** Only resources belonging to the selected category should appear.
- **Actual result:** The displayed resources matched the selected category.
- **Status:** Pass

### Test 5: Combine Search and Filters
- **Action:** Enter a search keyword and select a category filter.
- **Expected result:** Results should satisfy both the search query and selected filter.
- **Actual result:** The results updated correctly based on both conditions.
- **Status:** Pass

### Test 6: Clear Filters
- **Action:** Apply a filter, then clear the selection.
- **Expected result:** The filter should be removed and the relevant resources restored.
- **Actual result:** The results updated correctly after clearing the filter.
- **Status:** Pass

### Test 7: Empty Search
- **Action:** Leave the search field empty and apply a category filter.
- **Expected result:** The application should display all resources matching the selected category.
- **Actual result:** The category filter worked correctly without a search keyword.
- **Status:** Pass

### Test 8: Keyboard Accessibility
- **Action:** Navigate the search field, filters, and interactive elements using the keyboard.
- **Expected result:** Interactive elements should be reachable and usable without a mouse.
- **Actual result:** Keyboard navigation worked correctly.
- **Status:** Pass

## Conclusion

All eight manual test cases passed. The search and filtering functionality behaved as expected during testing, including combined filters, empty searches, and no-results scenarios.

## Testing Summary

- Total test cases: 8
- Passed: 8
- Failed: 0
- Critical defects: None identified during these checks.

## Conclusion

The resource directory's search and filtering functionality was manually tested. All eight test cases passed, including combined filtering, empty searches, no-results behaviour, and keyboard accessibility.

The tests confirmed that the main interactive workflow behaved as expected during the testing session.
