// @flow
import spawn from 'cross-spawn'
import fkill from 'fkill'

type Options = {
  when: string,
  stdio: string,
}

class SpawnPlugin {
  pid: any
  when: string
  args: any[]

  constructor(
    command: string,
    args: any[] = [],
    { when = 'done', stdio = 'inherit', ...options }: Options = {}
  ) {
    this.when = when
    this.args = [command, args, { stdio, ...options }]
  }

  apply(compiler: any) {
    compiler.plugin(this.when, () => {
      const promise = this.pid ? fkill(this.pid) : Promise.resolve()
      const doSpawn = () => {
        const server = spawn(...this.args)
        this.pid = server.pid
      }
      promise.then(doSpawn).catch(doSpawn)
    })
  }
}

module.exports = SpawnPlugin
