export const copyToClipboard = (e: MouseEvent, text: string) => {
  let innerHTML = '';
  if (e.target) {
    innerHTML = (e.target as HTMLButtonElement).innerHTML;
  }
  const checkmark =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 1024 1024" class="transition-all" ><path d="M866.133333 258.133333L362.666667 761.6l-204.8-204.8L98.133333 618.666667 362.666667 881.066667l563.2-563.2z" fill="#43A047"/></svg>';

  function showSuccess() {
    (e.target as HTMLButtonElement).innerHTML = checkmark;
    setTimeout(() => {
      (e.target as HTMLButtonElement).innerHTML = innerHTML;
    }, 2000);
  }
  if (
    navigator.clipboard &&
    navigator?.permissions &&
    navigator?.permissions?.query
  ) {
    navigator.permissions
      .query({ name: 'clipboard-write' } as unknown as PermissionDescriptor)
      .then((result) => {
        if (result.state == 'granted' || result.state == 'prompt') {
          navigator.clipboard.writeText(text).then(showSuccess, function () {
            //console.log('Failed to set clipboard');
          });
        }
      })
      .catch((error) => {
        //Quick fix for Firefox copy/paste not working
        navigator.clipboard.writeText(text).then(showSuccess, function () {
          console.log('Failed to set clipboard', error);
        });
      });
    return;
  }

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(showSuccess, function () {
      //console.log('Failed to set clipboard');
    });
    return;
  }

  // Fallback if no clipboard support
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  showSuccess();
  document.body.removeChild(textArea);
};
