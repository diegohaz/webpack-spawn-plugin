// @flow
import spawn from 'cross-spawn'
import fkill from 'fkill'

type Options = {
  when: string,
  stdio: string,
  persistent: boolean
}

class SpawnPlugin {
  pid: any

  when: string

  persistent: boolean

  args: any[]

  constructor(
    command: string,
    args: any[] = [],
    {
      when = 'done',
      stdio = 'inherit',
      persistent = false,
      ...options
    }: Options = {}
  ) {
    this.when = when
    this.persistent = persistent
    this.args = [command, args, { stdio, ...options }]
  }

  apply(compiler: any) {
    compiler.hooks[this.when].tap({ name: 'webpack-spawn-plugin' }, () => {
      let promise = Promise.resolve()
      if (this.pid) {
        if (this.persistent) {
          return
        }
        promise = fkill(this.pid)
      }
      const doSpawn = () => {
        const server = spawn(...this.args)
        this.pid = server.pid
      }
      promise.then(doSpawn).catch(doSpawn)
    })
  }
}

module.exports = SpawnPlugin
