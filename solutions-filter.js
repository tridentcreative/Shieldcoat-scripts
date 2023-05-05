    $(document).ready(function() {
      const filterButtons = $('[filter1-value1-set]');
      const listElements = $('[filter1-value1-match]');
      const backButton = $('[filter-back="categories"]');
      const textElement = $('[filter-subheader="true"]');
      const initialText = textElement.text();

      filterButtons.on('click', function() {
        const filterValue = $(this).attr('filter1-value1-set');
        listElements.hide().filter(`[filter1-value1-match="${filterValue}"]`).show();

        textElement.css('opacity', 0);
        setTimeout(() => {
          textElement.text('Select a project type').css('opacity', 1);
        }, 200);
      });

      backButton.on('click', function() {
        console.log('Back button clicked'); // Debugging line

        setTimeout(() => {
          listElements.hide();
        }, 300);

        textElement.css('opacity', 0);
        setTimeout(() => {
          console.log('Initial text:', initialText); // Debugging line
          textElement.text(initialText).css('opacity', 1);
        }, 200);
      });
    });
