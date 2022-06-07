AddEventHandler('chatMessage', function(playerId, playerName, message)
    if string.sub(message, 1, string.len('/')) ~= '/' then
        CancelEvent()


        playerName = GetPlayerName(playerId)
        local players = ESX.GetPlayers()
        coords = GetEntityCoords(playerId)
    
        for i=1, #players, 1 do
            local target = GetPlayerPed(players[i])
            local targetCoords = GetEntityCoords(target)
    
            if #(coords - targetCoords) <= 20 then
                TriggerClientEvent('chat:addMessage', players[i], {
                    args = {_U('ooc_prefix', playerName), message},
                    color = {128, 128, 128}
                })
            end
        end
    end
end)

RegisterNetEvent('rrp:sendProximityMessage')
AddEventHandler('rrp:sendProximityMessage', function(title, message, color)
    local player = PlayerId()
    local target = GetPlayerFromServerId(PlayerId())

    local playerPed = PlayerPedId()
    local targetPed = GetPlayerPed(target)
    local playerCoords = GetEntityCoords(playerPed)
    local targetCoords = GetEntityCoords(targetPed)

    if target == player or #(playerCoords - targetCoords) < 20 then
        TriggerEvent('chat:addMessage', {args = {title, message}, color = color})
    end
end)