import { IconWeight } from '@/icons/types'

export default new Map<IconWeight, React.ReactElement>([
  [
    'regular',
    <>
      <path d="M248.908 93.609l-7.451 14.025-7.199-14.025h-6.745c1.26 2.375 10.079 19.63 10.079 19.63v11.375h7.25c.005-1.546 0-11.33 0-11.33s9.16-17.29 10.457-19.675h-6.391zM162.251 113.833c0 5.687-1.929 6.984-7.35 6.984-5.421 0-7.346-1.296-7.346-6.984v-9.599c0-5.546 1.925-6.75 7.346-6.75 5.418 0 7.35 1.201 7.35 6.75v9.599zm3.105-19.046c-2.143-1.54-5.76-2.343-10.459-2.343-4.585 0-7.925.657-10.477 2.353-2.667 1.776-3.924 4.75-3.924 9.393v10.092c0 4.655 1.303 7.802 3.9 9.368 2.093 1.501 5.508 2.213 10.503 2.213 4.92 0 8.431-.733 10.446-2.177 2.601-1.661 3.956-4.897 3.956-9.404V104.19c0-4.42-1.331-7.587-3.945-9.403zM127.767 112.471c0 5.271-2.945 6.604-5.415 6.604h-8.73V98.03h8.73c2.471 0 5.415 1.326 5.415 6.233v8.208zm-5.474-18.862h-15.789v30.114h16.897c8.328 0 11.427-3.246 11.427-11.979v-6.62c.001-8.286-3.518-11.515-12.535-11.515zM174.726 93.609v30.56h20.99v-5.088h-13.61V93.609h-7.38zM255.47 121.565c0 1.353-.998 2.328-2.267 2.328-1.285 0-2.278-.975-2.278-2.328 0-1.318.994-2.316 2.278-2.316 1.269 0 2.267.999 2.267 2.316zm-5.078 0c0 1.609 1.287 2.78 2.811 2.78 1.506 0 2.797-1.171 2.797-2.78 0-1.589-1.294-2.755-2.797-2.755-1.525 0-2.811 1.166-2.811 2.755zm2.221-1.179h.655c.569 0 .718.168.718.465 0 .361-.196.526-.798.526h-.577l.002-.991zm0 1.396h.551l.848 1.391h.535l-.905-1.407c.475-.059.834-.31.834-.881 0-.628-.367-.91-1.13-.91h-1.223v3.198h.49v-1.391zM217.476 108.001c5.813-.497 7.077-3.154 7.077-6.973 0-3.363-1.532-5.076-3.206-6.042-1.398-.826-3.058-1.377-6.542-1.377h-15.323v30.56h15.526c4.775 0 6.758-.875 7.687-1.463 1.572-.987 3.618-3.166 3.618-6.644-.002-4.109-1.526-8.224-8.837-8.061zm-3.917 11.727h-6.693V97.991h7.285c2.457 0 4.002 1.82 4.002 4.321 0 3.833-1.992 3.925-7.662 4.116v3.542c5.065-.022 9.129-.305 9.129 4.589-.001 2.461-1.679 5.169-6.061 5.169zM0 156.508h92.324V92.444H0v64.064zm21.415-8.309H10.889v-47.448h10.523c10.925 0 20.059 10.843 20.059 23.633 0 13.165-9.132 23.815-20.056 23.815zm60.036 0H70.893c-10.934 0-20.05-10.649-20.05-23.817 0-12.788 9.119-23.632 20.05-23.632H81.45v47.449zM141.8 155.538l-4.716-7.794h-2.369v7.794h-4.602v-22.177h11.268c1.075 0 1.952.152 2.64.464.694.31 1.245.72 1.647 1.25.41.515.689 1.121.847 1.803a9.25 9.25 0 01.239 2.152v2.977c0 .6-.053 1.223-.166 1.86a5.022 5.022 0 01-.646 1.767 4.108 4.108 0 01-1.354 1.325c-.574.354-1.326.53-2.255.53h-.59l5.337 8.048h-5.278l-.002.001zm.416-16.602c0-.68-.17-1.188-.502-1.487-.343-.316-.829-.466-1.459-.466h-5.542v7.113h5.601c1.266 0 1.903-.668 1.903-1.993l-.001-3.167zM107.407 136.945v-3.64h18.483v3.64h-6.701v18.593h-5.006v-18.593h-6.776zM233.639 139.753c.008-1.991-2.111-1.859-2.111-1.859l-4.594-.029v12.557l4.499.031c1.348 0 2.163-.618 2.169-2.169l.037-8.531zm-.323 15.677h-12.398v-22.069h12.04c4.557 0 6.203 1.978 6.203 5.586v10.348c0 4.83-2.036 6.135-6.428 6.135M163.417 155.807h-5.566c-4.001 0-5.918-1.279-5.918-6.019v-16.469h4.677v16.785c0 1.407.634 1.879 1.757 1.879h5.022c1.116 0 1.751-.472 1.751-1.879v-16.785h4.162v16.469c-.002 4.74-1.879 6.019-5.885 6.019zM197.147 133.718v21.686h5.434v-8.369l7.216-.072v8.441h5.786v-21.686h-5.495l-.237 8.698-7.303-.039-.028-8.659h-5.373zM190.866 133.757h-15.85v21.646l15.823.009v-3.069h-12.223v-7.057l9.386.015v-3.07l-9.221-.003.045-5.428h12.014l.026-3.043z" />
    </>,
  ],
])
