
  // ---------- 1. Select & edit text ----------
  const textTarget = document.querySelector('#text-target');
  const textMessages = [
    "The DOM is just a tree of nodes.",
    "textContent changes what you see, not the HTML.",
    "Every click here re-runs a tiny function.",
    "Click the button to change this line."
  ];
  let textIndex = 0;
  document.querySelector('#btn-text').addEventListener('click', () => {
    textIndex = (textIndex + 1) % textMessages.length;
    textTarget.textContent = textMessages[textIndex];
  });

  // ---------- 2. Style & class toggling ----------
  const boxTarget = document.querySelector('#box-target');
  document.querySelector('#btn-style').addEventListener('click', () => {
    boxTarget.classList.toggle('is-circle');
    if (boxTarget.classList.contains('is-circle')) {
      boxTarget.style.borderRadius = '50%';
      boxTarget.style.background = 'var(--coral)';
      boxTarget.style.transform = 'rotate(45deg)';
    } else {
      boxTarget.style.borderRadius = '8px';
      boxTarget.style.background = 'var(--blue)';
      boxTarget.style.transform = 'rotate(0deg)';
    }
  });

  // ---------- 3. Create & append elements ----------
  const createTarget = document.querySelector('#create-target');
  let chipCount = 0;
  document.querySelector('#btn-create').addEventListener('click', () => {
    chipCount++;
    const chip = document.createElement('div');
    chip.textContent = `node ${chipCount}`;
    chip.style.cssText = `
      background: var(--border);
      border-radius: 6px;
      padding: 6px 12px;
      font-size: 12.5px;
    `;
    createTarget.appendChild(chip);
  });
  document.querySelector('#btn-clear').addEventListener('click', () => {
    createTarget.innerHTML = '';
    chipCount = 0;
  });

  // ---------- 4. Remove elements ----------
  const removeStage = document.querySelector('#remove-stage');
  ['Item A', 'Item B', 'Item C', 'Item D'].forEach(label => {
    const chip = document.createElement('button');
    chip.textContent = `${label} ✕`;
    chip.addEventListener('click', () => chip.remove());
    removeStage.appendChild(chip);
  });

  // ---------- 5. Attribute manipulation ----------
  const attrTarget = document.querySelector('#attr-target');
  document.querySelector('#btn-attr').addEventListener('click', () => {
    const current = attrTarget.getAttribute('data-state');
    const next = current === 'off' ? 'on' : 'off';
    attrTarget.setAttribute('data-state', next);
    attrTarget.textContent = `state: ${next}`;
    attrTarget.style.background = next === 'on' ? 'var(--green)' : 'transparent';
    attrTarget.style.color = next === 'on' ? 'var(--bg)' : 'var(--text)';
    attrTarget.style.border = next === 'on' ? 'none' : '1px solid var(--border)';
  });

  // ---------- 6. Mini to-do list ----------
  const todoInput = document.querySelector('#todo-input');
  const todoList = document.querySelector('#todo-list');

  function addTodo() {
    const value = todoInput.value.trim();
    if (!value) return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = value;

    const actions = document.createElement('div');

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'done';
    doneBtn.className = 'success';
    doneBtn.addEventListener('click', () => li.classList.toggle('done'));

    const delBtn = document.createElement('button');
    delBtn.textContent = 'delete';
    delBtn.className = 'danger';
    delBtn.style.marginLeft = '6px';
    delBtn.addEventListener('click', () => li.remove());

    actions.appendChild(doneBtn);
    actions.appendChild(delBtn);
    li.appendChild(span);
    li.appendChild(actions);
    todoList.appendChild(li);

    todoInput.value = '';
    todoInput.focus();
  }

  document.querySelector('#btn-add-todo').addEventListener('click', addTodo);
  todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTodo();
  });


